#!/usr/bin/env bash
# Build script for Render deployment

echo "🚀 Starting Render build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🔨 Building NestJS application..."
npm run build

echo "✅ Build completed successfully!"
echo "🌟 Ready to start production server..."