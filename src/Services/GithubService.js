import { Octokit } from "octokit";
import axios from "axios"

const octokit = new Octokit({
    auth: process.env.VUE_APP_GITHUB_KEY
})

let GithubService = {
    async getProfile(){
        var result = await axios.get("https://api.github.com/users/BusraOzcann")
        return result
    },

    async getRepos(){
        return await octokit.request('GET /users/{username}/repos', {
            username: 'BusraOzcann',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    },

    async getARepo(owner, repo, defaultBranch){
        return await octokit.request(`GET /repos/${owner}/${repo}`, {
            owner: 'OWNER',
            repo: 'REPO',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    }
}

export default GithubService 