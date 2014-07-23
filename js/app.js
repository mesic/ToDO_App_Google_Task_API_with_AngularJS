'use strict';

// Declare app level module which depends on filters, and services
var todoApp = angular.module('todoApp', []);

//URLs
todoApp.constant("GOOGLE_VALIDATE_TOKEN_URL", "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=");
todoApp.constant("GOOGLE_TASK_API_URL", "https://www.googleapis.com/tasks/v1/lists/%40default/tasks?access_token=");
todoApp.constant('GOOGLE_AUTH_URL', 'https://accounts.google.com/o/oauth2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ftasks+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ftasks.readonly+profile&redirect_uri=http://localhost:57657/Index.html&response_type=token&client_id=759474991499-j0tip3nsv9q0ee6tvv02jber6afsrqrk.apps.googleusercontent.com');