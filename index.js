const core = require('@actions/core');
const github = require('@actions/github');

try {
	const { pull_request } = github.context.payload;

	if (pull_request?.head?.ref) {
		const { ref } = pull_request.head;
		const clickUpBranchName = /cu-[a-z0-9]/gi;

		if (clickUpBranchName.test(ref)) {
			core.info("ClickUp branch detected! Good job :D");
		}
		else {
			core.setFailed("Please use a ClickUp branch!");
		}
	}
	else {
		core.setFailed('Could not find head for pull request');
	}
} catch (error) {
	core.setFailed(error.message);
}
