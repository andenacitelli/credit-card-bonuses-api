#!/bin/bash
set -e

echo "Setting up credit-card-bonuses-api..."

mise trust -a && mise install

pnpm install

pnpm run generate

echo "Setup complete!"
