// utils/asyncHandler/asyncHandler.js
const asyncHandler = (fn) => async (req) => {
  try {
    const result = await fn(req);
    if (result instanceof Response) return result; // Already a Response
    const { status = 200, body } = result || { body: null }; // Default to 200 if no result
    return new Response(
      JSON.stringify(body),
      { status, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

module.exports = asyncHandler;