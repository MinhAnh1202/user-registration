#!/usr/bin/env bash
# Build script for Render deployment

set -e  # Exit on error

echo "🚀 Starting Render build process..."

# Install all dependencies including devDependencies for build
echo "📦 Installing all dependencies (including dev dependencies)..."
npm ci

# Build the application
echo "🔨 Building NestJS application..."
npm run build

# Clean up dev dependencies to reduce size
echo "🧹 Cleaning up dev dependencies..."
npm ci --only=production

echo "✅ Build completed successfully!"
echo "🌟 Ready to start production server..."