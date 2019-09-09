import React, { Component } from "react";
import "./App.css";
import kebabcase from "lodash.kebabcase";
import { CopyToClipboard } from "react-copy-to-clipboard";

const BRANCH_COPIED = "Branch copied!!!";
const COMMAND_COPIED = "Command copied!!!";

class App extends Component {
  state = {
    featureBranch: "feature/",
    hotfixBranch: "hotfix/",
    bugBranch: "bug/",
    releaseBranch: "release/",
    showNoti: false,
    notiMsg: ""
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

  showNotifyMessage = text => {
    const self = this;

    if (!text) {
      text = "Empty!!!!!!";
    }

    self.setState({
      showNoti: true,
      notiMsg: text
    });

    setTimeout(() => {
      self.setState({
        showNoti: false,
        notiMsg: ""
      });
    }, 1500);
  };

  render() {
    const {
      featureBranch,
      hotfixBranch,
      bugBranch,
      releaseBranch,
      showNoti,
      notiMsg
    } = this.state;

    return (
      <div className="App">
        <div className="app-container">
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
              <CopyToClipboard
                text={featureBranch}
                onCopy={() => this.showNotifyMessage(BRANCH_COPIED)}
              >
                <button className="btn btn--primary">B</button>
              </CopyToClipboard>
              <CopyToClipboard
                text={this.gitComand(featureBranch)}
                onCopy={() => this.showNotifyMessage(COMMAND_COPIED)}
              >
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
              <CopyToClipboard
                text={hotfixBranch}
                onCopy={() => this.showNotifyMessage(BRANCH_COPIED)}
              >
                <button className="btn btn--primary">B</button>
              </CopyToClipboard>
              <CopyToClipboard
                text={this.gitComand(hotfixBranch)}
                onCopy={() => this.showNotifyMessage(COMMAND_COPIED)}
              >
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
              <CopyToClipboard
                text={bugBranch}
                onCopy={() => this.showNotifyMessage(BRANCH_COPIED)}
              >
                <button className="btn btn--primary">B</button>
              </CopyToClipboard>
              <CopyToClipboard
                text={this.gitComand(bugBranch)}
                onCopy={() => this.showNotifyMessage(COMMAND_COPIED)}
              >
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
              <CopyToClipboard
                text={releaseBranch}
                onCopy={() => this.showNotifyMessage(BRANCH_COPIED)}
              >
                <button className="btn btn--primary">B</button>
              </CopyToClipboard>
              <CopyToClipboard
                text={this.gitComand(releaseBranch)}
                onCopy={() => this.showNotifyMessage(COMMAND_COPIED)}
              >
                <button className="btn btn--primary ml-1">G</button>
              </CopyToClipboard>
            </div>
          </div>
        </div>

        <div className={`notify-msg ${showNoti ? "notify-msg-active" : ""}`}>{notiMsg}</div>
      </div>
    );
  }
}

export default App;
