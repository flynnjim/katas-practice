/*

Supermarket Queue
You are a middle manager in a large supermarket chain, tasked with overseeing the checkout queue.

Every once in a while, your boss radios you to ask how long the current queues will take to process. You take this job seriously, so you've decided to write a function called queueTime to solve the problem.

The function takes two arguments:

customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
checkouts: a positive integer, the number of checkout tills.
The function should return the time required to process all the customers.

There is only ONE queue.
The order of the queue NEVER changes.
Assume that the front person in the queue (i.e. the first element in the array) proceeds to a till as soon as it becomes free.
Examples:
queueTime([2, 2, 2], 1)
returns 6 because just one checkout means the total time is just the sum of the times

queueTime([2, 10], 2)
returns 10 because each customer has immediate access to a checkout and the slowest customer is 10

queueTime([2, 2, 2], 2)
returns 4 because the first 2 customers have immediate access to a checkout, and then one customer is left to be processed

queueTime([2, 3, 10], 2)
returns 12, because the first checkout will deal with the 2 minute customer, and then the 10 minute customer - totalling 12 minutes

*/

const supermarketQueue = (customers, checkouts) => {
  const queues = new Array(checkouts).fill(0);
  let currentCustomerPosition = 0;
  let totalWaitTime = 0;
  let stillQueue = true;
  while (stillQueue || currentCustomerPosition < customers.length) {
    // first fill queue from custmers
    for (let i = 0; i < queues.length; i++) {
      if (queues[i] === 0 && currentCustomerPosition < customers.length) {
        queues[i] = customers[currentCustomerPosition];
        currentCustomerPosition++;
      }
      // go through queue, minus one and add a minute
      if (queues[i] > 0) {
        queues[i]--;
      }
    }
    totalWaitTime++;

    // calculate still queue empty
    stillQueue = false;
    queues.forEach((checkout) => {
      if (checkout > 0) {
        stillQueue = true;
      }
    });
  }

  return totalWaitTime;
};

module.exports = { supermarketQueue };
