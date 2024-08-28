#!/bin/bash

# Loop from 1 to 9
for i in {1..9}; do
  # Create a file named i-main.js
  touch "${i}-main.js"
  echo "Created file: ${i}-main.js"
done
