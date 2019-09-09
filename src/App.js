import React, { Component } from "react";
import "./App.css";
import kebabcase from "lodash.kebabcase";
import { CopyToClipboard } from "react-copy-to-clipboard";

class App extends Component {
  state = {
    featureBranch: "feature/",
    hotfixBranch: "hotfix/",
    bugBranch: "bug/",
    releaseBranch: "release/"
  };

  onBranchNameInputChange = e => {
    const text = e.target.value;
    const kebabcase_text = kebabcase(text);

    this.setState({
      featureBranch: `feature/${kebabcase_text}`,
      hotfixBranch: `hotfix/${kebabcase_text}`,
      bugBranch: `bug/${kebabcase_text}`,
      releaseBranch: `release/${kebabcase_text}`
    });
  };

  gitComand = text => {
    return `git checkout -b ${text}`;
  };

  render() {
    const {
      featureBranch,
      hotfixBranch,
      bugBranch,
      releaseBranch
    } = this.state;

    return (
      <div className="App">
        <h1>git checkout -b</h1>

        <div className="input-container">
          <input
            className="input-field input-branch-in"
            placeholder="type here"
            onChange={e => this.onBranchNameInputChange(e)}
          />
        </div>

        <div className="input-container">
          <input
            className="input-field input-branch-out"
            value={featureBranch}
            onChange={e => this.setState({ featureBranch: e.target.value })}
          />
          <div className="btn--inside">
            <CopyToClipboard text={featureBranch}>
              <button className="btn btn--primary">B</button>
            </CopyToClipboard>
            <CopyToClipboard text={this.gitComand(featureBranch)}>
              <button className="btn btn--primary ml-1">G</button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="input-container">
          <input
            className="input-field input-branch-out"
            value={hotfixBranch}
            onChange={e => this.setState({ hotfixBranch: e.target.value })}
          />
          <div className="btn--inside">
            <CopyToClipboard text={hotfixBranch}>
              <button className="btn btn--primary">B</button>
            </CopyToClipboard>
            <CopyToClipboard text={this.gitComand(hotfixBranch)}>
              <button className="btn btn--primary ml-1">G</button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="input-container">
          <input
            className="input-field input-branch-out"
            value={bugBranch}
            onChange={e => this.setState({ bugBranch: e.target.value })}
          />
          <div className="btn--inside">
            <CopyToClipboard text={bugBranch}>
              <button className="btn btn--primary">B</button>
            </CopyToClipboard>
            <CopyToClipboard text={this.gitComand(bugBranch)}>
              <button className="btn btn--primary ml-1">G</button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="input-container">
          <input
            className="input-field input-branch-out"
            value={releaseBranch}
            onChange={e => this.setState({ releaseBranch: e.target.value })}
          />
          <div className="btn--inside">
            <CopyToClipboard text={releaseBranch}>
              <button className="btn btn--primary">B</button>
            </CopyToClipboard>
            <CopyToClipboard text={this.gitComand(releaseBranch)}>
              <button className="btn btn--primary ml-1">G</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
