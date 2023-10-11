<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendEmailNotifications extends Notification
{
    use Queueable;

    public $content;
    public $sender;


    /**
     * Create a new notification instance.
     */
    public function __construct($content, $sender)
    {
        $this->content = $content;
        $this->sender = $sender;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->line($this->content)
            ->greeting('Professeur:'. ' ' .$this->sender)
            ->line('Je ne serais pas disponible pour le cours de ce jour')
            ->line('Merci de bien vouloir annuler le cours');
            // ->action('Notification Action', url('/'));
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
