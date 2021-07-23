# !/bin/bash

# Any parmeter I want to add in, use dollar sign
# eg $1 == first param, $2 == second, etc
# Use $@ to represent all paramenters,
# $@ expands into parameters based off position,
# with the first being $1, second $2, etc
# can name param whatever you want

container_name="would-you-rather_app_1"

if [ -z "$@" ]
then
    echo "please call script with dependencies you would like to add, eg:"
    echo "./add_dependancies.sh {dependency1} {dependency2} ...etc"
else
    for dependency in "$@"
    do
        echo "installing $dependency"
        echo "running: yarn add $dependency, in docker container $container_name"
        docker exec $container_name yarn add $dependency
    done
fi




#yarn add prop-types
#yarn add escape-string-regexp
#yarn add sort-by
#yarn add react-router-dom
#yarn add prop-types
