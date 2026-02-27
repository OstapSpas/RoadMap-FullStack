const btnOpen = document.querySelector(".open-modal-btn");
console.log(btnOpen);


const modalWindow = document.querySelector(".modal");
// const modalWindow = document.querySelector(".modal-dialog");
console.log(modalWindow);
const btnClose = document.querySelector(".modal__close");
console.log(btnClose);


const openModal = (e)=> {
    modalWindow.classList.add('active');
    console.log(e);
    
};

const closeModal = (e) => {
    modalWindow.classList.remove('active');
    console.log(e);
    
}

btnOpen.addEventListener('click', openModal);

btnClose.addEventListener('click',closeModal);

stap@ostap:~$  sudo apt remove $(dpkg --get-selections docker.io docker-compose docker-compose-v2 docker-doc podman-docker containerd runc | cut -f1)
dpkg: no packages found matching docker.io
dpkg: no packages found matching docker-compose
dpkg: no packages found matching docker-compose-v2
dpkg: no packages found matching docker-doc
dpkg: no packages found matching podman-docker
dpkg: no packages found matching containerd
dpkg: no packages found matching runc
[sudo] password for ostap: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
0 upgraded, 0 newly installed, 0 to remove and 15 not upgraded.
ostap@ostap:~$ # Add Docker's official GPG key:
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update
Hit:1 http://archive.ubuntu.com/ubuntu noble InRelease
Get:2 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]        
Get:3 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]      
Hit:4 https://ppa.launchpadcontent.net/maarten-fonville/android-studio/ubuntu noble InRelease
Get:5 https://repo.steampowered.com/steam stable InRelease [3,622 B]           
Get:6 https://packages.microsoft.com/repos/code stable InRelease [3,590 B]
Get:7 http://archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
Get:8 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages [1,743 kB]
Get:9 http://security.ubuntu.com/ubuntu noble-security/main amd64 Packages [1,448 kB]
Get:10 https://packages.microsoft.com/repos/code stable/main amd64 Packages [21.7 kB]
Get:11 http://security.ubuntu.com/ubuntu noble-security/main i386 Packages [376 kB]
Get:12 http://security.ubuntu.com/ubuntu noble-security/main amd64 Components [21.5 kB]
Get:13 http://security.ubuntu.com/ubuntu noble-security/restricted amd64 Components [208 B]
Get:14 http://security.ubuntu.com/ubuntu noble-security/universe i386 Packages [578 kB]
Get:15 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Packages [933 kB]
Get:16 http://security.ubuntu.com/ubuntu noble-security/universe Translation-en [213 kB]
Get:17 http://archive.ubuntu.com/ubuntu noble-updates/main i386 Packages [580 kB]
Get:18 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Components [74.2 kB]
Get:19 http://security.ubuntu.com/ubuntu noble-security/universe amd64 c-n-f Metadata [19.9 kB]
Get:20 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 Components [208 B]
Get:21 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Components [175 kB]
Get:22 http://archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Components [212 B]
Get:23 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages [1,528 kB]
Get:24 http://archive.ubuntu.com/ubuntu noble-updates/universe i386 Packages [1,006 kB]
Get:25 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 Components [386 kB]
Get:26 http://archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 Components [940 B]
Get:27 http://archive.ubuntu.com/ubuntu noble-backports/main amd64 Components [7,300 B]
Get:28 http://archive.ubuntu.com/ubuntu noble-backports/restricted amd64 Components [216 B]
Get:29 http://archive.ubuntu.com/ubuntu noble-backports/universe amd64 Components [10.5 kB]
Get:30 http://archive.ubuntu.com/ubuntu noble-backports/multiverse amd64 Components [212 B]
Fetched 9,510 kB in 3s (2,816 kB/s)              
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
22 packages can be upgraded. Run 'apt list --upgradable' to see them.
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
ca-certificates is already the newest version (20240203).
curl is already the newest version (8.5.0-2ubuntu10.6).
0 upgraded, 0 newly installed, 0 to remove and 22 not upgraded.
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: noble
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
Hit:1 http://security.ubuntu.com/ubuntu noble-security InRelease
Get:2 https://repo.steampowered.com/steam stable InRelease [3,622 B]           
Get:3 https://download.docker.com/linux/ubuntu noble InRelease [48.5 kB]       
Hit:4 https://packages.microsoft.com/repos/code stable InRelease               
Hit:5 http://archive.ubuntu.com/ubuntu noble InRelease                         
Hit:6 https://ppa.launchpadcontent.net/maarten-fonville/android-studio/ubuntu noble InRelease
Hit:7 http://archive.ubuntu.com/ubuntu noble-updates InRelease
Get:8 https://download.docker.com/linux/ubuntu noble/stable amd64 Packages [44.2 kB]
Hit:9 http://archive.ubuntu.com/ubuntu noble-backports InRelease
Fetched 96.3 kB in 1s (118 kB/s)                         
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
22 packages can be upgraded. Run 'apt list --upgradable' to see them.
N: Skipping acquire of configured file 'stable/binary-i386/Packages' as repository 'https://download.docker.com/linux/ubuntu noble InRelease' doesn't support architecture 'i386'
ostap@ostap:~$ sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  docker-ce-rootless-extras libslirp0 pigz slirp4netns
Suggested packages:
  cgroupfs-mount | cgroup-lite docker-model-plugin
The following NEW packages will be installed:
  containerd.io docker-buildx-plugin docker-ce docker-ce-cli
  docker-ce-rootless-extras docker-compose-plugin libslirp0 pigz slirp4netns
0 upgraded, 9 newly installed, 0 to remove and 22 not upgraded.
Need to get 96.7 MB of archives.
After this operation, 391 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 https://download.docker.com/linux/ubuntu noble/stable amd64 containerd.io amd64 2.2.1-1~ubuntu.24.04~noble [23.4 MB]
Get:2 http://archive.ubuntu.com/ubuntu noble/universe amd64 pigz amd64 2.8-1 [65.6 kB]
Get:3 http://archive.ubuntu.com/ubuntu noble/main amd64 libslirp0 amd64 4.7.0-1ubuntu3 [63.8 kB]
Get:4 http://archive.ubuntu.com/ubuntu noble/universe amd64 slirp4netns amd64 1.2.1-1build2 [34.9 kB]
Get:5 https://download.docker.com/linux/ubuntu noble/stable amd64 docker-ce-cli amd64 5:29.2.1-1~ubuntu.24.04~noble [16.3 MB]
Get:6 https://download.docker.com/linux/ubuntu noble/stable amd64 docker-ce amd64 5:29.2.1-1~ubuntu.24.04~noble [22.5 MB]
Get:7 https://download.docker.com/linux/ubuntu noble/stable amd64 docker-buildx-plugin amd64 0.31.1-1~ubuntu.24.04~noble [20.3 MB]
Get:8 https://download.docker.com/linux/ubuntu noble/stable amd64 docker-ce-rootless-extras amd64 5:29.2.1-1~ubuntu.24.04~noble [6,387 kB]
Get:9 https://download.docker.com/linux/ubuntu noble/stable amd64 docker-compose-plugin amd64 5.0.2-1~ubuntu.24.04~noble [7,721 kB]
Fetched 96.7 MB in 18s (5,244 kB/s)                                            
Selecting previously unselected package containerd.io.
(Reading database ... 249046 files and directories currently installed.)
Preparing to unpack .../0-containerd.io_2.2.1-1~ubuntu.24.04~noble_amd64.deb ...
Unpacking containerd.io (2.2.1-1~ubuntu.24.04~noble) ...
Selecting previously unselected package docker-ce-cli.
Preparing to unpack .../1-docker-ce-cli_5%3a29.2.1-1~ubuntu.24.04~noble_amd64.de
b ...
Unpacking docker-ce-cli (5:29.2.1-1~ubuntu.24.04~noble) ...
Selecting previously unselected package docker-ce.
Preparing to unpack .../2-docker-ce_5%3a29.2.1-1~ubuntu.24.04~noble_amd64.deb ..
.
Unpacking docker-ce (5:29.2.1-1~ubuntu.24.04~noble) ...
Selecting previously unselected package pigz.
Preparing to unpack .../3-pigz_2.8-1_amd64.deb ...
Unpacking pigz (2.8-1) ...
Selecting previously unselected package docker-buildx-plugin.
Preparing to unpack .../4-docker-buildx-plugin_0.31.1-1~ubuntu.24.04~noble_amd64
.deb ...
Unpacking docker-buildx-plugin (0.31.1-1~ubuntu.24.04~noble) ...
Selecting previously unselected package docker-ce-rootless-extras.
Preparing to unpack .../5-docker-ce-rootless-extras_5%3a29.2.1-1~ubuntu.24.04~no
ble_amd64.deb ...
Unpacking docker-ce-rootless-extras (5:29.2.1-1~ubuntu.24.04~noble) ...
Selecting previously unselected package docker-compose-plugin.
Preparing to unpack .../6-docker-compose-plugin_5.0.2-1~ubuntu.24.04~noble_amd64
.deb ...
Unpacking docker-compose-plugin (5.0.2-1~ubuntu.24.04~noble) ...
Selecting previously unselected package libslirp0:amd64.
Preparing to unpack .../7-libslirp0_4.7.0-1ubuntu3_amd64.deb ...
Unpacking libslirp0:amd64 (4.7.0-1ubuntu3) ...
Selecting previously unselected package slirp4netns.
Preparing to unpack .../8-slirp4netns_1.2.1-1build2_amd64.deb ...
Unpacking slirp4netns (1.2.1-1build2) ...
Setting up docker-buildx-plugin (0.31.1-1~ubuntu.24.04~noble) ...
Setting up containerd.io (2.2.1-1~ubuntu.24.04~noble) ...
Created symlink /etc/systemd/system/multi-user.target.wants/containerd.service →
 /usr/lib/systemd/system/containerd.service.
Setting up docker-compose-plugin (5.0.2-1~ubuntu.24.04~noble) ...
Setting up docker-ce-cli (5:29.2.1-1~ubuntu.24.04~noble) ...
Setting up libslirp0:amd64 (4.7.0-1ubuntu3) ...
Setting up pigz (2.8-1) ...
Setting up docker-ce-rootless-extras (5:29.2.1-1~ubuntu.24.04~noble) ...
Setting up slirp4netns (1.2.1-1build2) ...
Setting up docker-ce (5:29.2.1-1~ubuntu.24.04~noble) ...
Created symlink /etc/systemd/system/multi-user.target.wants/docker.service → /us
r/lib/systemd/system/docker.service.
Created symlink /etc/systemd/system/sockets.target.wants/docker.socket → /usr/li
b/systemd/system/docker.socket.
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.7) ...
ostap@ostap:~$ sudo systemctl status docker
● docker.service - Docker Application Container Engine
     Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; preset: e>
     Active: active (running) since Mon 2026-02-16 14:41:34 CET; 10s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 744368 (dockerd)
      Tasks: 18
     Memory: 27.5M (peak: 31.6M)
        CPU: 442ms
     CGroup: /system.slice/docker.service
             └─744368 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/co>

Feb 16 14:41:33 ostap dockerd[744368]: time="2026-02-16T14:41:33.618072427+01:0>
Feb 16 14:41:33 ostap dockerd[744368]: time="2026-02-16T14:41:33.641429999+01:0>
Feb 16 14:41:33 ostap dockerd[744368]: time="2026-02-16T14:41:33.663267677+01:0>
Feb 16 14:41:34 ostap dockerd[744368]: time="2026-02-16T14:41:34.057741986+01:0>
Feb 16 14:41:34 ostap dockerd[744368]: time="2026-02-16T14:41:34.066822676+01:0>
Feb 16 14:41:34 ostap dockerd[744368]: time="2026-02-16T14:41:34.067029365+01:0>
Feb 16 14:41:34 ostap dockerd[744368]: time="2026-02-16T14:41:34.078962156+01:0>
Feb 16 14:41:34 ostap dockerd[744368]: time="2026-02-16T14:41:34.085709900+01:0>
Feb 16 14:41:34 ostap dockerd[744368]: time="2026-02-16T14:41:34.085824893+01:0>
Feb 16 14:41:34 ostap systemd[1]: Started docker.service - Docker Application C>
lines 1-22/22 (END)
ostap@ostap:~$ sudo systemctl start docker
ostap@ostap:~$ sudo docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
17eec7bbc9d7: Pull complete 
ea52d2000f90: Download complete 
Digest: sha256:ef54e839ef541993b4e87f25e752f7cf4238fa55f017957c2eb44077083d7a6a
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

ostap@ostap:~$ 
