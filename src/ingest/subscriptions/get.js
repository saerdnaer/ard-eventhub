/*

	ard-eventhub
	by SWR audio lab

*/

// load eventhub utils
const pubsub = require('../../utils/pubsub');
const response = require('../../utils/response');

module.exports = async (req, res) => {
	try {
		// preset vars
		const subscriptionName = req.params.subscriptionName;
		let subscription;

		// load single subscription
		try {
			subscription = await pubsub.getSubscription(subscriptionName);
		} catch (err) {
			return res.sendStatus(404);
		}

		// verify if user is allowed to get subscription (same organization)
		if (subscription.organization?.id !== req.user.organization?.id) {
			let subsOrg = subscription.organization?.name;
			let userOrg = req.user.organization?.name;
			// return 400 error
			return response.badRequest(req, res, {
				status: 400,
				message: `Mismatch of user and subscription organization`,
				errors: `Subscription of organization '${subsOrg}' is not visible for user of organization '${userOrg}'`,
			});
		}

		// return data
		res.status(200).json(subscription);
	} catch (err) {
		console.error(
			'ingest/subscriptions/get',
			'failed to get subscription',
			JSON.stringify({
				body: req.body,
				error: err.stack || err,
			})
		);
		return response.internalServerError(req, res, err);
	}
};
