import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepoList = () => {
  const [repos, setRepos] = useState([]);

  // Fetch repository data
  useEffect(() => {
    axios
      .get('https://api.github.com/users/rjregalado-stacktrek/repos')
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>My Repositories</h1>
      <div className="repo-list">
        {repos.map(repo => (
          <div key={repo.id} className="repo-card">
            <img src={repo.owner.avatar_url} alt="Repo Owner" className="avatar" />
            <div>
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
