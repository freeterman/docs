# Datadog Notification Plugin (Enterprise)

Enterprise customers have access to this plugin, that allows you to create an event in Datadog based on the execution status of a job. For example, you can configure it to create an event if the job failed or if the job succeeded.

## Setup

Follow the instructions outlined in the [**Datadog Integration Overview**](/manual/plugins/datadog-plugins-overview) to set up authentication with Datadog.

## Configuration

![Datadog Notification - Configuration](~@assets/img/notification-config.png)

- **Title**
: This is the event title. It can be anything you want it to be. By default, it includes data about the job and the execution.

- **Text**
: This is the body of the event. It can be anything you wish.

- **Aggregation Key**
: This is an arbitrary key used for aggregation. If you specify a key, all events with that key will be grouped together in the event steam. Maximum 100 characters.

- **Alert Type**
: This is the type that the event is defined as. The options are error, warning, info or success. 

- **Device Name**
: This is the device name.

- **Host**
: If you want to associate the event with a specific host, then you could specify which host here. Doesn't require a value.

- **Priority**
: This is the priority that the event is defined as. The options are normal or low.

- **Related Parent ID**
: If the event should have a parent event, this is where you can specify the parent ID by including its ID. This field is not required.

- **Source Type Name**
: This is the type of event being posted. Option examples include nagios, hudson, jenkins, my_apps, chef, puppet, git, bitbucket, etc.

- **Tags**
: This can be a list of tags that you want to be applied to the event. If you wish to specify more than one, they need to be separated by a comma.
