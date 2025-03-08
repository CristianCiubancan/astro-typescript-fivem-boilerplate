/// <reference types="@citizenfx/client" />

// Log when the client resource starts.
on('onClientResourceStart', (resourceName: string) => {
    if (resourceName === GetCurrentResourceName()) {
      console.log(`[CLIENT] Resource '${resourceName}' started!`);
    }
  });
  
  // Register a client command to test functionality.
  RegisterCommand('clientHello', () => {
    console.log('[CLIENT] Hello from the client!');
  }, false);
  