
export function handler(event, context, callback) {
    console.log('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!!')
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: 'Hello, World!' }),
    })
  }