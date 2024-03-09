const AddCar = () => {
    return (
        <div>
            <h1>Add Car</h1>
            <form>
                <div>
                    <label htmlFor="make">Make</label>
                    <input type="text" id="make" name="make" />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <input type="text" id="model" name="model" />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input type="text" id="year" name="year" />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" />
                </div>
                <div>
                    <label htmlFor="img">Image</label>
                    <input type="text" id="img" name="img" />
                </div>
                <button type="submit">Add Car</button>
            </form>
        </div>
    )
}  

export default AddCar;