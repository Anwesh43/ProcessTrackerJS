#ProcessTrackerJS

##A javascript library to use a process tracker in your site. Imagine the situation where user needs to track some process in your site. For example an user made an order in your site and he want's to keep track his order status then we can use this Process Tracker so he/she can keep the track of the order visually.

##Usage

###Creating the process tracker and specify the color in constructor

```
    var processTracker = new ProcessTracker(color)

```

###Add process in the tracker
```
    processTracker.addProcess('Delivered')
```
###create the ProcessTracker to show in your webpage
```
    processTracker.create()
```
###In time update the process state during the transaction
```
    processTracker.updateProcessState()
```
