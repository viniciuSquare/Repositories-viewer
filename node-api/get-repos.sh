#!bin/bash

repositories = $(curl -s https://api.github.com/users/viniciusquare/repos | awk '/ssh_url/{print$2}' | sed 's/^"//g' | sed 's/",$//g')
