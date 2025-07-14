---
publishDate: 2025-07-14T00:00:00Z
title: Membangun Alat Pembersih Cache di Ubuntu dengan Bash
author: Davidson Rafael K.N.
excerpt: Tutorial lengkap membuat alat CLI untuk membersihkan cache dependency, file sementara, dan log di Ubuntu Linux menggunakan Bash script.
image: https://images.unsplash.com/photo-1637144113536-9c6e917be447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80
category: Linux
metadata:
  canonical: https://mendowa.dev/blog/bash-cleaning-tool
  author: Davidson Rafael K.N.
tags:
  - linux
  - bash
  - automation
  - system-tools
  - ubuntu
  - clean-script
  - command-line
---

## Pendahuluan

Membersihkan sistem dari cache dependency, file sementara, dan log yang menumpuk adalah bagian penting dari perawatan sistem Linux. Pada tutorial ini, kita akan membuat tool pembersih sistem menggunakan Bash script, dari awal hingga bisa dieksekusi di terminal.

## Kenapa Bash?

Walau kita bisa menggunakan bahasa seperti C atau Python, Bash adalah pilihan terbaik untuk tugas ini karena:

- Terintegrasi langsung dengan sistem Linux
- Tidak butuh proses kompilasi
- Mudah dijalankan di terminal dengan `sudo`

---

## 1. Struktur Script dan Tujuan

Script ini akan punya beberapa fitur:

- Bersihkan **APT cache** (`/var/cache/apt`)
- Hapus **file sementara** (`/tmp`, `/var/tmp`)
- Kosongkan **log sistem** (`/var/log/*.log`)
- Hapus **user cache** (`~/.cache`)

Kita juga akan mendukung opsi CLI seperti `--apt`, `--temp`, `--logs`, dll.

---

## 2. Isi Script Lengkap

```bash
#!/bin/bash

# Ensure the script runs with sudo privileges
if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root (use sudo)"
   exit 1
fi

# Function to display script usage
usage() {
    echo "Usage: $0 [options]"
    echo "Options:"
    echo "  -a, --apt        Clean APT package cache"
    echo "  -t, --temp       Clean temporary files"
    echo "  -l, --logs       Clean system logs"
    echo "  -c, --cache      Clean user cache directories"
    echo "  -A, --all        Clean all of the above"
    echo "  -h, --help       Display this help message"
    exit 1
}

clean_apt_cache() {
    echo "Cleaning APT cache..."
    apt-get clean
    apt-get autoclean
    echo "APT cache cleaned successfully."
}

clean_temp_files() {
    echo "Cleaning temporary files..."
    rm -rf /tmp/*
    rm -rf /var/tmp/*
    echo "Temporary files cleaned successfully."
}

clean_logs() {
    echo "Cleaning system logs..."
    find /var/log -type f -name "*.log" -exec truncate -s 0 {} \;
    echo "System logs cleaned successfully."
}

clean_user_cache() {
    echo "Cleaning user cache directories..."
    find /home/*/.cache -type f -delete
    echo "User cache directories cleaned successfully."
}

clean_all() {
    clean_apt_cache
    clean_temp_files
    clean_logs
    clean_user_cache
}

if [ $# -eq 0 ]; then
    usage
fi

while [[ "$1" != "" ]]; do
    case $1 in
        -a | --apt )        clean_apt_cache ;;
        -t | --temp )       clean_temp_files ;;
        -l | --logs )       clean_logs ;;
        -c | --cache )      clean_user_cache ;;
        -A | --all )        clean_all ;;
        -h | --help )       usage ;;
        * ) echo "Invalid option: $1"; usage ;;
    esac
    shift
done

exit 0
```

---

## 3. Menjalankan dan Menginstal

### A. Ubah jadi executable

```bash
chmod +x clean_cache.sh
```

### B. Tes jalankan

```bash
sudo ./clean_cache.sh -h      # lihat help
sudo ./clean_cache.sh -a      # bersihkan APT
sudo ./clean_cache.sh -A      # bersihkan semua
```

### C. Pasang ke sistem

```bash
sudo mv clean_cache.sh /usr/local/bin/clean_cache
```

Sekarang kamu bisa jalankan dari mana saja:

```bash
sudo clean_cache -A
```

---

## 4. Tips & Best Practice

- Selalu backup sistem jika ragu.
- Jangan pakai `rm -rf` sembarangan — script ini sudah aman karena hanya menghapus direktori temporary & cache.
- Bisa dijadwalkan dengan `cron` untuk maintenance mingguan.

---

## Penutup

Dengan tool sederhana ini, kamu bisa menjaga sistem Ubuntu tetap bersih dan ringan. Tugas rutin jadi otomatis hanya dengan satu perintah.
