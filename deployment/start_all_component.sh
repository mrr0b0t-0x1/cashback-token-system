#! /bin/bash

ADAPTER_PATH=../adapter
adapter_path=("./cashbackplatform")

# update db scripts
for path in ${adapter_path[@]}; do
  cd ${path}
  sh start-components.sh
  cd ..
done

