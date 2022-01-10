# Custom-MADE Setup in Windows
Custom-MADE is intended to be used on Linux. Therefore, developing on Windows or MacOS is difficult. 

To overcome this difficulty, this guide shall help the developer. 

## VM Setup
First install a *Virtual Machine* software on your system. The user can use one of the following:
- Oracle VM
- VMware Workstation Player
- Docker

Oracle VM and VMware are the easiest to install, but Docker is the most efficient one (only for experienced users!). 

1. Install a Ubuntu distribution with SSH support. It is recommended to install Ubuntu Server. 

2. Determine the ip address of your virtual machine. 

![](ifconfig.png)

3. Install Visual Studio Code & the extension *Remote - SSH*.

![](Remote%20-%20SSH.png)

4. In the bottom left corner, click on the green SSH symbol and connect to the virtual machine. It usually follows the syntax 
```
ssh yourusername@vmipaddress
```

Now you are ready to develop Custom-MADE on your local machine by using the Linux setup. 