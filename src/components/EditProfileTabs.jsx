import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../styles/edit-profile-tabs.css';
import pressEnter from '../functions/pressEnter';

const ProfileTabs = ({ handleUserInput, currentEmail, name, handleNameUpdate, handlePasswordUpdate }) => {

  return (
    <div>
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Account
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Password
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <p className="Text">Make changes to your account here. Click save when you're done.</p>
          <fieldset className="Fieldset tabs-label">
            <label className="Label" htmlFor="username">
              Display Name
            </label>
            <input onKeyUp={(e) => { pressEnter(e, handleNameUpdate) }} onChange={handleUserInput} name="username" className="Input" id="username" defaultValue={name} />
          </fieldset>
          {/* TODO: DEAL with display name afterwards
      <fieldset className="Fieldset tabs-label">
        <label className="Label" htmlFor="username">
          Display Name
        </label>
        <input className="Input" id="username" defaultValue={name} />
      </fieldset>
        */}
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button onClick={() => { handleNameUpdate }} className="Button green">Save changes</button>
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <p className="Text">Change your password here. After saving, you'll be logged out.</p>
          <fieldset className="Fieldset tabs-label">
            <label className="Label" htmlFor="newPassword">
              New password
            </label>
            <input onChange={handleUserInput} name="newPassword" className="Input" id="newPassword" type="password" />
          </fieldset>
          <fieldset className="Fieldset tabs-label">
            <label className="Label" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input onChange={handleUserInput} name="confirmPassword" className="Input" id="confirmPassword" type="password" />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button onClick={handlePasswordUpdate} className="Button green">Change password</button>
          </div>
        </Tabs.Content>
      </Tabs.Root>

    </div>

  )

}

export default ProfileTabs;

