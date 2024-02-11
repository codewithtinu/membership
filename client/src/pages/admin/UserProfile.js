const Userprofile =()=>{
    return(
        <>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">User Profile Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" value="" />
              </div>

              <div className="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
              </div>

              <div className="md:col-span-3">
                <label for="contact">Contact</label>
                <input type="text" name="contact" id="contact" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
              </div>

              <div className="md:col-span-2">
                <label for="city">City</label>
                <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
              </div>

              <div className="md:col-span-2">
                <label for="password">Password</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="password" id="password" placeholder="Password" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                </div>
              </div>
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Userprofile;