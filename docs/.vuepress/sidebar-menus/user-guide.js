module.exports = [{
  title: 'User Guide',
  collapsable: false,
  sidebarDepth: 1,
  children: [
    {
      title: "Projects",
      collapsable: true,
      path: '/manual/projects/',
      children: [
        '/manual/projects/project-create',
        '/manual/projects/configuration',
        {
          title: 'SCM',
          collapsable: true,
          children: [
            '/manual/projects/scm/',
            '/manual/projects/scm/git',
            '/manual/projects/scm/job-replication'
          ]
        },
        '/manual/projects/project-readme',
        '/manual/projects/project-motd',
        '/manual/projects/plugin-control',
        '/manual/projects/project-archive',
        '/manual/projects/project-delete',
        {
          title: 'Resource Model Sources',
          collapsable: true,
          children: [
            '/manual/projects/resource-model-sources/',
            '/manual/projects/resource-model-sources/node-wizard',
            '/manual/projects/resource-model-sources/aws',
            '/manual/projects/resource-model-sources/azure',
            '/manual/projects/resource-model-sources/gcp',
            '/manual/projects/resource-model-sources/oracle',
            '/manual/projects/resource-model-sources/datadog',
            '/manual/projects/resource-model-sources/servicenow',
            '/manual/projects/resource-model-sources/vmware',
            '/manual/projects/resource-model-sources/sensu',
            '/manual/projects/resource-model-sources/builtin',
            '/manual/projects/resource-model-sources/resource-editor'
          ]
        },
        {
          title: 'Node Execution',
          collapsable: true,
          children: [
            '/manual/projects/node-execution/',
            '/manual/projects/node-execution/builtin',
            '/manual/projects/node-execution/script',
            '/manual/projects/node-execution/ssh',
            '/manual/projects/node-execution/powershell',
            '/manual/projects/node-execution/bastionssh',
            '/manual/projects/node-execution/openssh',
            '/manual/projects/node-execution/aws-ssm'
          ]
        }
      ]
    },
    {
      title: 'Jobs',
      collapsable: true,
      path: '/manual/04-jobs',
      sidebarDepth: 1,
      children: [
        '/manual/04-jobs',
        '/manual/creating-jobs',
        '/manual/job-workflows',
        '/manual/job-options',
        '/manual/jobs/job-notifications',
        {
          title: 'Log Filters',
          collapsable: true,
          path: '/manual/log-filters/',
          sidebarDepth: 1,
          children: [
            '/manual/log-filters/key-value-data.md',
            '/manual/log-filters/quiet-output.md',
            '/manual/log-filters/progress-badge.md',
            '/manual/log-filters/highlight-output.md',
            '/manual/log-filters/render-formatted-data.md',
            '/manual/log-filters/mask-passwords.md',
            '/manual/log-filters/json-jq.md',
            '/manual/log-filters/multi-line-regex.md'
          ]
        },
        {
            title: 'Job Plugins',
            collapsable: true,
            path: '/manual/job-plugins',
            sidebarDepth: 1,
            children: [
                {
                    title: 'Node Steps',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {title: 'AWS', path: '/manual/node-steps/aws'},
                        {title: 'Azure', path: '/manual/node-steps/azure'},
                        {title: 'Builtin Node Steps', path: '/manual/node-steps/builtin'},
                        {title: 'Datadog', path: '/manual/node-steps/datadog'},
                        {title: 'Google Cloud Platform', path: '/manual/node-steps/gcp'},
                        {title: 'Jira', path: '/manual/node-steps/jira'},
                        {title: 'Oracle Cloud Infrastructure', path: '/manual/node-steps/oracle'},
                        {title: 'Sensu', path: '/manual/node-steps/sensu'},
                        {title: 'SQL Run Command', path: '/manual/node-steps/sqlrunner'},
                        {title: 'VMware', path: '/manual/node-steps/vmware'}
                    ]
                },
                {
                    title: 'Notification Plugins',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {title: 'Datadog', path: '/manual/notifications/datadog'},
                        {title: 'Email', path: '/manual/notifications/email'},
                        {title: 'Jenkins', path: '/manual/notifications/jenkins'},
                        {title: 'Jira', path: '/manual/notifications/jira'},
                        {title: 'PagerDuty', path: '/manual/notifications/pagerduty'},
                        {title: 'Sensu', path: '/manual/notifications/sensu'},
                        {title: 'ServiceNow', path: '/manual/notifications/servicenow'},
                        {title: 'Slack', path: '/manual/notifications/slack'},
                        {title: 'Webhooks', path: '/manual/notifications/webhooks'}
                    ]
                },
                {
                    title: 'Workflow Steps',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        {title: 'Ansible Module & Playbook', path: '/manual/workflow-steps/builtin'},
                        {title: 'AWS CloudWatch Logs', path: '/manual/workflow-steps/aws-cloudwatch'},
                        {title: 'AWS EC2', path: '/manual/workflow-steps/aws'},
                        {title: 'AWS ECS & Fargate', path: '/manual/workflow-steps/aws-ecs-fargate'},
                        {title: 'AWS ELB', path: '/manual/workflow-steps/aws-elb-workflow-plugin'},
                        {title: 'AWS Lambda', path: '/manual/workflow-steps/aws-lambda'},
                        {title: 'AWS RDS', path: '/manual/workflow-steps/aws-rds'},
                        {title: 'Azure Workflow Steps', path: '/manual/workflow-steps/azure'},
                        {title: 'Builtin Workflow Steps', path: '/manual/workflow-steps/builtin'},
                        {title: 'Datadog', path: '/manual/workflow-steps/datadog'},
                        {title: 'File Transfer', path: '/manual/workflow-steps/file-transfer'},
                        {title: 'Google Workflow Steps', path: '/manual/workflow-steps/gcp'},
                        {title: 'Github', path: '/manual/workflow-steps/github'},
                        {title: 'Jira', path: '/manual/workflow-steps/jira'},
                        {title: 'Oracle Cloud Infrastructure', path: '/manual/workflow-steps/oracle'},
                        {title: 'PagerDuty', path: '/manual/workflow-steps/pagerduty'},
                        {title: 'Progress Badge', path: '/manual/workflow-steps/progress-badge'},
                        {title: 'Sensu', path: '/manual/workflow-steps/sensu'},
                        {title: 'ServiceNow', path: '/manual/workflow-steps/servicenow'},
                        {title: 'VMware', path: '/manual/workflow-steps/vmware'}
                    ]
                }
            ]
        },
        '/manual/execution-lifecycle/job-resume.md',
        '/manual/execution-lifecycle/job-retry-failed-nodes.md',
        '/manual/execution-lifecycle/result-data.md',
        '/manual/jobs/job-queue.md',
      ]
    },
    {
      title: 'Nodes',
      collapsable: true,
      path:'/manual/05-nodes',
      sidebarDepth: 1,
      children: [
        '/manual/05-nodes',
        '/manual/node-enhancers.md',
        '/manual/11-node-filters.md',
        {
          title: 'Health Checks',
          collapsable: true,
          path: '/manual/healthchecks',
          sidebarDepth: 2,
          children: [
              '/manual/healthchecks',
              '/manual/healthcheckplugins/datadog.md',
              '/manual/healthcheckplugins/sensu.md',
              '/manual/healthcheckplugins/azure-healthcheck.md',
              '/manual/healthcheckplugins/aws-ec2-healthcheck.md',
              '/manual/healthcheckplugins/gcp-compute-healthcheck.md'
          ]
        }
      ]
    },
    {
      title: 'Key Storage',
      collapsable: true,
      path: '/manual/key-storage/key-storage',
      sidebarDepth: 1,
      children: [
        '/manual/key-storage/key-storage',
        {
          title: 'Key Storage Plugins',
          collapsable: true,
          children: [
            '/manual/key-storage/storage-plugins/thycotic-storage.md',
            '/manual/key-storage/storage-plugins/vault.md',
            '/manual/key-storage/storage-plugins/cyberark-storage.md'
          ]
        },
      ]
    },
    {
      title: 'Commands',
      path: '/manual/06-commands',
      collapsable: true,
      sidebarDepth: 1
    },
    {
      title: 'Activity',
      path: '/manual/08-activity',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '/manual/08-activity',
        '/manual/07-executions'
      ]
    },
    {
      title: 'Schedules (Enterprise)',
      collapsable: true,
      path: '/manual/schedules/project-schedules',
      children: [
        '/manual/schedules/project-schedules.md',
        '/manual/schedules/missedjobfires.md'
      ],
      sidebarDepth: 1
    },
    {
      title: 'Tour Manager (Enterprise)',
      collapsable: true,
      path: '/manual/tour-manager.md',
      sidebarDepth: 1
    },
    {
      title: 'Calendars (Enterprise)',
      collapsable: true,
      path:'/manual/calendars',
      sidebarDepth: 2,
      children: [
        '/manual/calendars',
        '/manual/calendars/system-calendars.md',
        '/manual/calendars/project-calendars.md',
        '/manual/calendars/import-export.md'
      ]
    },
    {
      title: 'Webhooks',
      collapsable: true,
      path: '/manual/webhooks',
      sidebarDepth: 2,
      children: [
        '/manual/webhooks',
        {
          title: 'Webhooks Handlers',
          sidebarDepth: 2,
          children: [
            '/manual/webhooks/advanced-run-job',
            '/manual/webhooks/pagerduty-run-job',
            '/manual/webhooks/datadog-run-job.md',
            '/manual/webhooks/aws-sns-webhook',
            '/manual/webhooks/github-webhook',
            '/manual/webhooks/run-job.md',
            '/manual/webhooks/log-events.md'
          ]
        },
      ]
    },
    {
      title: 'Project Settings',
      collapsable: true,
      path: '/manual/project-settings',
      sidebarDepth: 2
    },
    {
      title: 'System Menu',
      collapsable: true,
      path: '/manual/system-configs',
      sidebarDepth: 1,
      children: [
          '/manual/system-configs',
          '/manual/user-management/user-mgmt',
          '/manual/user-management/password-reset',
          '/manual/user-management/user-classes',
          '/manual/system-report',
          '/manual/configuration-mgmt/configmgmt'
      ]
    },
    ['/manual/10-user.md', 'Profile Menu'],
    {
      title: 'Integrations',
      collapsable: true,
      path: '/manual/integrations',
      sidebarDepth: 1,
      children: [
          '/manual/integrations/servicenow-app.md'
      ]
    },
    {
      title: 'Document Formats',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        '/manual/document-format-reference/aclpolicy-v10.md',
        '/manual/document-format-reference/job-v20.md',
        '/manual/document-format-reference/job-yaml-v12.md',
        '/manual/document-format-reference/resource-json-v10.md',
        '/manual/document-format-reference/resource-v13.md',
        '/manual/document-format-reference/resource-yaml-v13.md',
      ]
    }
  ]
}]
