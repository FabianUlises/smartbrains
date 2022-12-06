import React from 'react';
import './register.css';

const Register = ({ routeChange }) => {
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center form-article">
        <main className="pa4">
            <form className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="fullName">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="fullName"  id="fullName" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div> 
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                </fieldset>
                <div className="reset-btn">
                    <input onClick={() => routeChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign up" />
                    {/* <button onclick={() => console.log(route)}>sign in</button> */}
                </div>
            </form>
        </main>
    </article>
    )
}

export default Register;