<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Notifications\SendEmailNotifications;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;

class SendEmailCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-email';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // $content = "Demande d'annulation de cours";
        // Notification::send($users, new SendEmailNotifications($content, $events, $users));
        // $this->info('notification envoyée avec succès');
    }
}
