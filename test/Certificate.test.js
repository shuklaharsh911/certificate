const Certificate = artifacts.require('./Certificate.sol')

contract('Certificate', (accounts)=>{
	let certificate;

	before(async () => {
        certificate = await Certificate.deployed()
	})
    describe('deployment', async() => {
     it('deploys successfully', async() => {
     	const address = await certificate.address
			assert.notEqual(address, 0x0)
			assert.notEqual(address, '')
			assert.notEqual(address, null)
			assert.notEqual(address, undefined)
     })
    })

    describe('college-details', async()=>{
    	let result,result1;
    	before(async ()=>{
          result = await certificate.sendData()
    	})
    	it('sends meassage', async () =>{
        console.log(result.logs)
       })

    })

})