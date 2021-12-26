const subscription = require("../../../../models/subscription");
const bills = require("../../../../models/bills");

module.exports.createSubscription = async (req, res) => {
  try {
    const user_id = req.user;
    const { subscriptionType, subscriptionName, subscriptionAmount } = req.body;
    const subscriptionData = await subscription.create({
      user_id,
      subscriptionType,
      subscriptionName,
      subscriptionAmount,
    });

    return res.status(200).json({
      message: "Successfully added subscription",
      subscriptionData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports.createBill = async (req, res) => {
  try {
    const user_id = req.user;
    const { billName, billAmount, billDate } = req.body;
    const billData = await bills.create({
      user_id,
      billName,
      billAmount
    });

    return res.status(200).json({
      message: "Successfully added bill",
      billData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};
