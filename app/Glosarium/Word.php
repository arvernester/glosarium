<?php

namespace App\Glosarium;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    use Sluggable;

    protected $table = 'glosarium_words';

    /**
     * @var array
     */
    protected $fillable = [
        'user_id',
        'category_id',
        'slug',
        'alias',
        'lang',
        'origin',
        'locale',
        'spell',
        'pronounce',
        'is_standard',
        'is_published',
        'retry_count',
    ];

    protected $hidden = [
        'id',
        'category_id',
        'alias',
        'pronounce',
        'status',
        'is_published',
        'is_standard',
        'created_at',
        'updated_at',
        'retry_count',
        'user_id',
    ];

    protected $appends = [
        'url',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'locale',
            ],
        ];
    }

    public function getUrlAttribute()
    {
        return route('glosarium.word.show', [
            $this->relations['category']['attributes']['slug'],
            $this->attributes['slug'],
        ]);
    }

    /**
     * @return mixed
     */
    public function category()
    {
        return $this->belongsTo(\App\Glosarium\Category::class);
    }

    /**
     * @return mixed
     */
    public function descriptions()
    {
        return $this->hasMany(\App\Glosarium\Description::class);
    }

    /**
     * @return mixed
     */
    public function views()
    {
        return $this->hasMany(\App\Glosarium\WordView::class);
    }

    public function user()
    {
        return $this->belongsTo(\App\User::class);
    }
}
