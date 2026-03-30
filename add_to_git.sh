#!/bin/bash
set -e

echo "Adding Dockerfiles, workflow, and script to the local git repository..."

# Add frontend changes
git add client/Dockerfile

# Add backend changes
git add server/Dockerfile

# Add CD workflow
git add .github/workflows/cd.yml

# Add this script itself
git add add_to_git.sh

# Commit the changes
git commit -m "chore: add client and server Dockerfiles, CD pipeline workflow, and add_to_git script"

echo "Changes have been committed to the repository successfully!"
