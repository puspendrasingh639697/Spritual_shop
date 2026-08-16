import React from "react";

export default function NotificationsTab({ notifications, setNotifications }) {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-stone-200">
        <h3 className="text-base font-serif font-bold text-[#4a2e18]">Notification Preferences</h3>
        <p className="text-xs text-stone-500">Choose how you want to receive updates from us.</p>
      </div>

      <div className="space-y-4 text-xs">
        <label className="flex items-center justify-between p-4 bg-stone-50 border border-stone-200 rounded-sm cursor-pointer">
          <div>
            <p className="font-bold text-[#4a2e18]">WhatsApp Order Updates</p>
            <p className="text-[11px] text-stone-500">Receive instant dispatch & delivery updates on WhatsApp.</p>
          </div>
          <input 
            type="checkbox" 
            checked={notifications.whatsappUpdates}
            onChange={(e) => setNotifications({...notifications, whatsappUpdates: e.target.checked})}
            className="w-4 h-4 accent-[#8b3a2b]"
          />
        </label>

        <label className="flex items-center justify-between p-4 bg-stone-50 border border-stone-200 rounded-sm cursor-pointer">
          <div>
            <p className="font-bold text-[#4a2e18]">SMS Alerts</p>
            <p className="text-[11px] text-stone-500">Get OTPs and urgent delivery alerts via SMS.</p>
          </div>
          <input 
            type="checkbox" 
            checked={notifications.orderAlerts}
            onChange={(e) => setNotifications({...notifications, orderAlerts: e.target.checked})}
            className="w-4 h-4 accent-[#8b3a2b]"
          />
        </label>

        <label className="flex items-center justify-between p-4 bg-stone-50 border border-stone-200 rounded-sm cursor-pointer">
          <div>
            <p className="font-bold text-[#4a2e18]">Puja & Festival Reminders</p>
            <p className="text-[11px] text-stone-500">Get reminders for upcoming auspicious dates & rituals.</p>
          </div>
          <input 
            type="checkbox" 
            checked={notifications.pujaReminders}
            onChange={(e) => setNotifications({...notifications, pujaReminders: e.target.checked})}
            className="w-4 h-4 accent-[#8b3a2b]"
          />
        </label>

        <label className="flex items-center justify-between p-4 bg-stone-50 border border-stone-200 rounded-sm cursor-pointer">
          <div>
            <p className="font-bold text-[#4a2e18]">Promotional Emails</p>
            <p className="text-[11px] text-stone-500">Receive special festival discounts and sacred collection launches.</p>
          </div>
          <input 
            type="checkbox" 
            checked={notifications.promotionalEmails}
            onChange={(e) => setNotifications({...notifications, promotionalEmails: e.target.checked})}
            className="w-4 h-4 accent-[#8b3a2b]"
          />
        </label>
      </div>
    </div>
  );
}