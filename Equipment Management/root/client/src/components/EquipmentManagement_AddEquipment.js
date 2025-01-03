import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddEquipment() {
  const [equipmentno, setItemCode] = useState("");
  const [equipmentname, setName] = useState("");
  const [equipmentdescription, setDiscription] = useState("");
  const [quantityinstock, setQuantityInStock] = useState("");
  const [quantityrequired, setQuantityRequired] = useState("");
  const [purchasetobemade, setPurchaseToBeMade] = useState("");
  const [availableequipment, setAvailable] = useState("");
  const [rentalequipment, setRental] = useState("");
  const [damageequipment, setDamage] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newequipment = {
      equipmentno,
      equipmentname,
      equipmentdescription,
      quantityinstock,
      quantityrequired,
      purchasetobemade,
      availableequipment,
      rentalequipment,
      damageequipment,
    };

    axios.post("http://localhost:4000/equipment/addEquipment", newequipment).then(() => {
      alert("Equipment Added");
      setItemCode("");
      setName("");
      setDiscription("");
      setQuantityInStock("");
      setQuantityRequired("");
      setPurchaseToBeMade("");
      setAvailable("");
      setRental("");
      setDamage("");
    }).catch((err) => {
      alert(err);
    });
  }

  return (
    <div className="container mt-5">
      <form className="mx-auto w-50 shadow p-5" onSubmit={sendData}>
        <Link className="btn btn-primary" to="/Equipment_Management/">Home</Link>
        <h3 className="mt-5">Fill-up details</h3>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="itemcode" className="form-label">Equipment No</label>
              <input type="text" className="form-control" id="equipmentno" placeholder="Enter Item Code" name="equipmentno" value={equipmentno} onChange={(e) => { setItemCode(e.target.value); }} required />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Equipment Name</label>
              <input type="text" className="form-control" id="equipmentname" placeholder="Enter Item Name" name="equipmentname" value={equipmentname} onChange={(e) => { setName(e.target.value); }} required />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Equipment Description</label>
              <input type="text" className="form-control" id="equipmentdescription" placeholder="Enter Description" name="equipmentdescription" value={equipmentdescription} onChange={(e) => { setDiscription(e.target.value); }} required />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity_in_stock" className="form-label">Quantity In Stock</label>
              <input type="number" className="form-control" id="quantity_in_stock" placeholder="Enter Quantity In Stock" name="quantityinstock" value={quantityinstock} onChange={(e) => { setQuantityInStock(e.target.value); }} required />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity_required" className="form-label">Quantity required</label>
              <input type="number" className="form-control" id="quantity_required" placeholder="Enter Quantity Required" name="quantityrequired" value={quantityrequired} onChange={(e) => { setQuantityRequired(e.target.value); }} required />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="purchase_to_be_made" className="form-label">Purchase to be made</label>
              <input type="number" className="form-control" id="purchase_to_be_made" placeholder="Enter Purchase To Be Made" name="purchasetobemade" value={purchasetobemade} onChange={(e) => { setPurchaseToBeMade(e.target.value); }} required />
            </div>
            <div className="mb-3">
              <label htmlFor="available" className="form-label">Available Equipment</label>
              <input type="number" className="form-control" id="availableequipment" placeholder="Enter Available Items" name="availableequipment" value={availableequipment} onChange={(e) => { setAvailable(e.target.value); }} required />
            </div>
            <div className="mb-3">
              <label htmlFor="rental" className="form-label">Rental Equipment</label>
              <input type="number" className="form-control" id="rentalequipment" placeholder="Enter Rental Items" name="rentalequipment" value={rentalequipment} onChange={(e) => { setRental(e.target.value); }} required />
            </div>
            <div className="mb-3">
              <label htmlFor="damage" className="form-label">Damage Equipment</label>
              <input type="number" className="form-control" id="damageequipment" placeholder="Enter Damage Items" name="damageequipment" value={damageequipment} onChange={(e) => { setDamage(e.target.value); }} required />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}