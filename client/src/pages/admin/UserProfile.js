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
          </div>

          <div className="lg:col-span-2">
          {/* <p className="font-medium text-lg ">Profile Details</p> */}
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5 ">
                <table >
                  <tr>
                  <td for="full_name" className="font-bold">Full Name :-</td>
                  <td>Kuldeep Sonune</td>
                  </tr>
                </table>
                
              </div>

              <div className="md:col-span-5">
                <table>
                  <tr>
                  <td for="email" className="font-bold">Email Address :-</td>
                  <td>KuldeepSonune001@gmail.com</td>
                  </tr>
                </table>
              </div>

              <div className="md:col-span-3">
                <table>
                  <tr>
                  <td for="contact" className="font-bold">Contact :-</td>
                <td>+91 xxxxxxxxxx</td>
                  </tr>
                </table>
                
              </div>

              <div className="md:col-span-2">
                <table>
                  <tr>
                  <td for="city" className="font-bold">City :-</td>
                <td>Ch.Sambhaji nager</td>
                  </tr>
                </table>
                
              </div>
              <div className="md:col-span-3">
                <table>
                  <tr>
                  <td for="password" className="font-bold">password :-</td>
                <div >
                  <td>********</td>
                </div>
                  </tr>
                </table>
                
              </div>

              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Action</button>
                  <button type="delete" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10">Delete</button>
                </div>
              </div>
              {/* <p className="md:col-span-5 text-red-500">Made with by Kuldeep Sonune.</p> */}
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