#!/bin/bash
set -e

START_TIME=$(perl -MTime::HiRes=time -e 'printf "%.2f", time')

echo "Setting up credit-card-bonuses-api..."

mise install pnpm

mise exec -- pnpm install &
mise install &

wait

mise exec -- pnpm run generate

END_TIME=$(perl -MTime::HiRes=time -e 'printf "%.2f", time')
ELAPSED=$(perl -e "printf '%.2f', $END_TIME - $START_TIME")

echo "Setup complete in ${ELAPSED}s!"
