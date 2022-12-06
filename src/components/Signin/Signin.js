import React from 'react';
import './signin.css';

const Signin = ({ routeChange, route }) => {
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center form-article">
        <main className="pa4">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
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
                    <input onClick={() => routeChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    {/* <button onclick={() => console.log(route)}>sign in</button> */}
                </div>
                <div className="lh-copy mt3 signup-btn">
                    <p onClick={() => console.log(route, 'route')} className="f6 link dim db pointer">Register</p>
                </div>
            </div> 
        </main>
    </article>
    )
}

export default Signin;