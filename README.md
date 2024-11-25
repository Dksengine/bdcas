# BDCAS - Blue Dolphin Computer Aquarium System
![logo]('Doc/logo.png') 
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Arch Linux](https://img.shields.io/badge/Arch%20Linux-1793D1?style=flat&logo=arch-linux&logoColor=white)
![Debian](https://img.shields.io/badge/Debian-A80030?style=flat&logo=debian&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=ubuntu&logoColor=white)
![Raspberry Pi](https://img.shields.io/badge/Raspberry%20Pi-A22846?style=flat&logo=raspberry-pi&logoColor=white)
![MQTT](https://img.shields.io/badge/MQTT-00B5E2?style=flat&logo=mqtt&logoColor=white)
![Fedora](https://img.shields.io/badge/Fedora-294172?style=flat&logo=fedora&logoColor=white)

## Installation

### Manual

Be sure that git are installated in your system:

`Ubuntu/Debian`
```bash
sudo apt-get install git
```

`Arch`
```bash
sudo pacman -S git
```

`Fedora`
```bash
sudo dfn install git
```

Clone the repository:

```bash
git clone https://github.com/Dksengine/bdcas
```

Now change permission to `AquariumControl`

```bash
sudo chmod +x bdcas
```

Do the same for the `dep.sh` script:

```bash
sudo chmod +x dep.sh
```

Install Docker and Docker Compose dependencies:
```bash
./dep.sh
```

Run Application!

```bash
./AcquariumControl
```

You can access the application at `localhost:3000`.

