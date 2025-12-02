#!/usr/bin/env bash
# Build script for Render deployment

set -e  # Exit on error

echo "🚀 Starting Render build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Install dev dependencies needed for build
echo "📦 Installing dev dependencies for build..."
npm ci

# Build the application
echo "🔨 Building NestJS application..."
npm run build

echo "✅ Build completed successfully!"
echo "🌟 Ready to start production server..."