import React, { useState } from 'react'
import { HeaderContainer,NavContainer } from './styles.ts'
import { Link } from 'react-router-dom'


const Header = () => {
    const [isSelectionBarOpen,setIsSelectionBarOpen] = useState(false)

    const handleManageBenificiaryClick =()=>{
        setIsSelectionBarOpen(!isSelectionBarOpen);

    }

    
  return (
    <div>
        <HeaderContainer>
            <NavContainer>
                <div>
                    <h2>Banking Portal</h2>
                </div>
                <ul style={{display:'flex',gap:"20px" , fontWeight: "bold", fontFamily: 'Roboto', listStyleType:'none'}}>
                        
                        <Link to='/'>
                        <li>
                            Home
                        </li>
                        </Link> 
                        <li style={{cursor: 'pointer'}} onClick={handleManageBenificiaryClick} >
                            Manage Beneficiary
                        </li>
                       
                </ul>
                {isSelectionBarOpen && (
                    <div style={{ backgroundColor: '#808080', padding: '10px', marginTop: '10px' , borderRadius:'5px'}}>
                    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                        <Link to='./AddBeneficiary'>
                        <li style={{ marginBottom: '10px', cursor: 'pointer' }} >
                        Add Benificiary
                        </li>
                        </Link> 
                        <Link to='./ViewaddBenificiary'>
                        <li style={{ marginBottom: '10px', cursor: 'pointer' }}>
                        View Benificiary
                        </li>
                        </Link>
                     
                        
                        <li style={{ marginBottom: '10px', cursor: 'pointer' }}>
                           <Link to="/RemoveBeneficiary"> Remove Benificiary</Link> 
                        </li>
                    </ul>
        </div>
      )}
            </NavContainer>
        </HeaderContainer>
    </div>
  )
}

export default Header