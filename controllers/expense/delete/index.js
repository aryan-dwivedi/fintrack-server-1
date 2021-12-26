const subscription = require("../../../../models/subscription");
const bills = require("../../../../models/bills");

module.exports.deleteSubscription = async (req, res) => {
  try {
    const user_id = req.user;
    const { subscriptionId } = req.body;
    const subscriptionData = await subscription.findOneAndDelete({
      _id: subscriptionId,
      user_id,
    });
    return res.status(200).json({
      message: "Successfully deleted subscription",
      subscriptionData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports.deleteBill = async (req, res) => {
  try {
    const user_id = req.user;
    const { billId } = req.body;
    const billData = await bills.findOneAndDelete({
      _id: billId,
      user_id,
    });
    return res.status(200).json({
      message: "Successfully deleted bill",
      billData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};
