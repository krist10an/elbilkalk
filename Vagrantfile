# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<SCRIPT
date > /etc/vagrant_provisioned_at
#curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
apt-get install -y nodejs build-essential git

npm install -g node-gyp
npm install -g angular-cli

SCRIPT

# Specify Vagrant version and Vagrant API version
Vagrant.require_version ">= 1.6.0"
VAGRANTFILE_API_VERSION = "2"

# Create and configure the VM(s)
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.hostname = "vagrant"

  config.vm.box = "bento/ubuntu-16.04"

  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 4200, host: 4200
  config.vm.network "forwarded_port", guest: 35729, host: 35729
  config.vm.provision "shell", inline: $script
end
