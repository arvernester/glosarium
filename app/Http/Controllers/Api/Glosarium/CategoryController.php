<?php

/**
 * Glosarium adalah aplikasi berbasis web yang menyediakan berbagai kata glosarium,
 * kamus nasional dan kamus bahasa daerah.
 *
 * @author Yugo <dedy.yugo.purwanto@gmail.com>
 * @copyright Glosarium - 2017
 *
 * @link https://github.com/glosarium/glosarium
 */

namespace App\Http\Controllers\Api\Glosarium;

use App\Glosarium\Category;
use App\Http\Controllers\Api\ApiController;
use Cache;
use Illuminate\Http\Request;
use Validator;

class CategoryController extends ApiController
{
    private $lifetime;

    public function __construct()
    {
        $this->lifetime = \Carbon\Carbon::now()->addDays(30);
    }

    public function index()
    {
        $validator = Validator::make(request()->all(), [
            'limit' => 'integer|between:1,25',
            'sort'  => 'string|in:asc,desc',
        ]);

        if ($validator->fails()) {
            return response()
                ->json($validator->errors(), 422)
                ->withHeaders($this->headers);
        }

        $key = sprintf('api.glosarium.category.index.%s', request('page', 0));

        $categories = Cache::remember($key, $this->lifetime, function () {
            return Category::orderBy('name', request('sort', 'ASC'))
                ->paginate(request('limit', 20));
        });

        return response()
            ->json($categories)
            ->withHeaders($this->headers);
    }

    public function show($slug)
    {
        $key = sprintf('api.glosarium.category.%s', $slug);

        $category = Cache::remember($key, $this->lifetime, function () use ($slug) {
            return Category::whereSlug(trim($slug))
                ->withCount('words')
                ->first();
        });

        if (empty($category)) {
            return response()
                ->json(['error' => trans('glosarium.category.notFound')], 404)
                ->withHeaders($this->headers);
        }

        return response()
            ->json($category)
            ->withHeaders($this->headers);
    }

    public function search()
    {
        $validator = Validator::make(request()->all(), [
            'keyword' => 'required|string',
            'limit'   => 'integer|between:1,25',
            'sort'    => 'string|in:asc,desc',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $categories = Category::filter()
            ->sort(request('sort', 'ASC'))
            ->paginate(request('limit', 20));

        return response()
            ->json($categories)
            ->withHeaders($this->headers);
    }

    public function random()
    {
        $category = Category::inRandomOrder()
            ->withCount('words')
            ->first();

        return response()->json($category);
    }
}
