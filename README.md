# BDCAS - Blue Dolphin Computer Aquarium System
![logo](/assets/logo.png) 
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![MQTT](https://img.shields.io/badge/MQTT-00B5E2?style=flat&logo=mqtt&logoColor=white)


#### Supported Platforms

![Arch Linux](https://img.shields.io/badge/Arch%20Linux-1793D1?style=flat&logo=arch-linux&logoColor=white)
![Debian](https://img.shields.io/badge/Debian-A80030?style=flat&logo=debian&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=ubuntu&logoColor=white)
![Raspberry Pi](https://img.shields.io/badge/Raspberry%20Pi-A22846?style=flat&logo=raspberry-pi&logoColor=white)
![Fedora](https://img.shields.io/badge/Fedora-294172?style=flat&logo=fedora&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-blue?logo=windows&style=flat-square)
![macOS](https://img.shields.io/badge/macOS-black?logo=apple&style=flat-square)

## Installation


### Manual


#### Linux Distro

Install Docker for your distribution:

`https://docs.docker.com/desktop/setup/install/linux/`

Be sure that git is installated in your system:

`Ubuntu/Debian/Rasberry Pi OS`
```bash
sudo apt-get install git
```

`Arch`
```bash
sudo pacman -S git
```

`Fedora`
```bash
sudo dnf install git
```

Clone the repository:

```bash
git clone https://github.com/Dksengine/bdcas
```

Now change permission to `bdcas`

```bash
sudo chmod +x bdcas
```


Install Docker and Docker Compose dependencies:
```bash
./dep.sh
```

Run Application!

```bash
sudo ./bdcas
```

You can access the application at `localhost:3000`.

#### Windows


Follow the Docker Desktop installation guide here:  
[Docker for Windows Installation](https://docs.docker.com/desktop/setup/install/windows-install/)

Make sure Git is installed. If not, download it here:  
[Git for Windows](https://git-scm.com/downloads/win)

Clone the repository:

```bash
git clone https://github.com/Dksengine/bdcas

```

Run Application!

```bash
./bdcas
```

You can access the application at `localhost:3000`.


#### macOS


Follow the Docker Desktop installation guide here:  
[Docker for macOS Installation](https://docs.docker.com/desktop/setup/install/mac-install/)

Download Git from this link:  
[Git for macOS](https://git-scm.com/downloads/mac)

Clone the repository:

```bash
git clone https://github.com/Dksengine/bdcas
```

Now change permission to `bdcas`

```bash
sudo chmod +x bdcas
```

Run Application!

```bash
sudo ./bdcas
```

You can access the application at `localhost:3000`.

## Package Manager


