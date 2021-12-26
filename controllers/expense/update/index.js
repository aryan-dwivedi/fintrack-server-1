const subscription = require("../../../../models/subscription");
const bills = require("../../../../models/bills");

module.exports.updateSubscription = async (req, res) => {
  try {
    const user_id = req.user;
    const { subscriptionId, subscriptionAmount } = req.body;
    const subscriptionData = await subscription.findOneAndUpdate(
      {
        _id: subscriptionId,
        user_id,
      },
      {
        subscriptionAmount,
      }
    );
    return res.status(200).json({
      message: "Successfully updated subscription",
      subscriptionData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports.updateBill = async (req, res) => {
  try {
    const user_id = req.user;
    const { billId, billAmount } = req.body;
    const billData = await bills.findOneAndUpdate(
      {
        _id: billId,
        user_id,
      },
      {
        billAmount,
      }
    );
    return res.status(200).json({
      message: "Successfully updated bill",
      billData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};
