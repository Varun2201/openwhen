import type { NextConfig } from "next";

const githubRepository = process.env.GITHUB_REPOSITORY;
const repositoryName = githubRepository?.split("/")[1];
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPage = repositoryName?.toLowerCase().endsWith(".github.io");
const githubPagesBasePath =
  isGithubPagesBuild && repositoryName && !isUserOrOrgPage
    ? `/${repositoryName}`
    : "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? githubPagesBasePath;

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
