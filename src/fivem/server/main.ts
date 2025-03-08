/// <reference types="@citizenfx/server" />

// Log when the server resource starts.
on('onResourceStart', (resourceName: string) => {
    if (resourceName === GetCurrentResourceName()) {
      console.log(`[SERVER] Resource '${resourceName}' started!`);
    }
  });
  
  // Register a server command to test functionality.
  RegisterCommand('serverHello', (source: number, args: string[], rawCommand: string) => {
    console.log(`[SERVER] Hello from the server! Source: ${source}`);
  }, false);
  