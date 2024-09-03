#!/bin/bash

# Loop from 0 to 10
for i in {0..10}; do
  # Create a file named i-main.js
  touch "${i}-main.js"
  echo "Created file: ${i}-main.js"
done
