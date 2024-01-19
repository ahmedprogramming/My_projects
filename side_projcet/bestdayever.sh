#/usr/bin/bash
# This Is a Comment

#echo "Enter you Name: "
#read name1 name2 ## input 
#echo "Hi $name1 , $name2 " ## Hi Ahmed
## when you enter you have to write beside each other

## read -p "UserName: " user_var
# -p for write the variables in same line 
# -word call flag 
## echo "UserName: $user_var"

## read -sp "Password: " pass_var
# hidden the input 
## echo "Password: $pass_var"

## echo "Enter names: "
## read -a  name
# -a is array []
## echo "the name is ${name[0]} ${name[1]} ${name[2]}"
# ${var[num]}

echo "Enter you name: "
# the default value is $REPLY
echo "Name: $REPLY"